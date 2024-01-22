// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    let disposable = vscode.commands.registerCommand('chat-to-markdown.convert', function () {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor!');
            return;
        }

        const document = editor.document;
        const documentText = document.getText();

		// Convert the document text to JSON
		let jsonData = JSON.parse(documentText);

		let markdownData = "## Requests\n\n";
        for (let request of jsonData['requests']) {
            markdownData += "### Request\n\n";
            markdownData += `${request['message']['text']}\n\n`;
            if ('response' in request) {
                markdownData += "### Response\n\n";
                for (let response of request['response']) {
                    markdownData += `${response['value']}\n\n`;
                }
            }
        }

        // Open the Markdown data in a new VS Code editor tab
        vscode.workspace.openTextDocument({ content: markdownData, language: 'markdown' })
            .then(doc => vscode.window.showTextDocument(doc));
    });

    context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
