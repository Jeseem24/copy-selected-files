import * as vscode from 'vscode';
import * as path from 'path';

/**
 * Detect language from file extension
 */
function getLanguageFromFile(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  const map: Record<string, string> = {
    '.js': 'javascript',
    '.ts': 'typescript',
    '.dart': 'dart',
    '.py': 'python',
    '.java': 'java',
    '.json': 'json',
    '.md': 'markdown',
    '.html': 'html',
    '.css': 'css',
    '.c': 'c',
    '.cpp': 'cpp',
    '.h': 'c',
    '.sh': 'bash',
    '.yml': 'yaml',
    '.yaml': 'yaml'
  };
  return map[ext] || '';
}

/**
 * Simple binary detection (null-byte check)
 */
function isBinary(content: Uint8Array): boolean {
  for (let i = 0; i < content.length; i++) {
    if (content[i] === 0) return true;
  }
  return false;
}

export function activate(context: vscode.ExtensionContext) {

  const disposable = vscode.commands.registerCommand(
    'copy-selected-files.copyContent',
    async (uri: vscode.Uri, selectedUris: vscode.Uri[]) => {

      const files = selectedUris?.length ? selectedUris : uri ? [uri] : [];
      if (files.length === 0) {
        vscode.window.showWarningMessage('No files selected.');
        return;
      }

      const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
      if (!workspaceFolder) {
        vscode.window.showErrorMessage('No workspace folder found.');
        return;
      }

      // 🔧 User settings
      const config = vscode.workspace.getConfiguration('copySelectedFiles');
      const maxFileSizeKB = config.get<number>('maxFileSizeKB', 1024);
      const enableCodeFences = config.get<boolean>('enableCodeFences', true);
      const includeLanguage = config.get<boolean>('includeLanguage', true);
      const maxFileSizeBytes = maxFileSizeKB * 1024;

      const sortedFiles = files.sort((a, b) =>
        a.fsPath.localeCompare(b.fsPath)
      );

      let output = '';
      let skipped = 0;
      let copied = 0;

      await vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: 'Copying selected files',
          cancellable: true
        },
        async (progress, token) => {

          for (let i = 0; i < sortedFiles.length; i++) {
            if (token.isCancellationRequested) {
              output += `\n[Operation cancelled by user]\n`;
              break;
            }

            const file = sortedFiles[i];
            const relativePath = path.relative(
              workspaceFolder.uri.fsPath,
              file.fsPath
            );

            progress.report({
              message: `${i + 1}/${sortedFiles.length} — ${relativePath}`
            });

            output += `## ${relativePath} :\n`;

            try {
              const stat = await vscode.workspace.fs.stat(file);

              if (stat.size > maxFileSizeBytes) {
                output += `[Skipped: file too large]\n\n`;
                skipped++;
                continue;
              }

              const data = await vscode.workspace.fs.readFile(file);

              if (isBinary(data)) {
                output += `[Skipped: binary file]\n\n`;
                skipped++;
                continue;
              }

              const content = Buffer.from(data).toString('utf8');
              const language = getLanguageFromFile(relativePath);

              if (enableCodeFences) {
                const lang = includeLanguage ? language : '';
                output += `\`\`\`${lang}\n${content}\n\`\`\`\n\n`;
              } else {
                output += `${content}\n\n`;
              }

              copied++;

            } catch {
              output += `[Skipped: unable to read file]\n\n`;
              skipped++;
            }
          }
        }
      );

      await vscode.env.clipboard.writeText(output);

      vscode.window.showInformationMessage(
        `Copied ${copied} file(s), skipped ${skipped}`
      );
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
