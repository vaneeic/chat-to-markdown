# Chat to Markdown Converter for GitHub Copilot

This Visual Studio Code extension converts a chat session exported from the GitHub Copilot extension into a Markdown document. The extension reads JSON data from the active window and generates a Markdown document in a new window.

## Features

1. **Active Window Reading**: The extension reads JSON data from the active window in Visual Studio Code. The JSON data should be an export from a chat session with the GitHub Copilot extension.

2. **Markdown Document Generation**: The extension converts the chat session data into a Markdown document. Each request and response in the chat session is formatted as a separate section in the Markdown document.

3. **New Window Display**: The generated Markdown document is displayed in a new window in Visual Studio Code.

## Requirements

This extension requires Visual Studio Code to be installed on your system. It is recommended to use the latest version of Visual Studio Code for the best experience. You can download the latest version of Visual Studio Code from [here](https://code.visualstudio.com/download).

The extension also requires the active window to contain JSON data exported from a chat session with the GitHub Copilot extension. You can export a chat session by using the "Chat: Export session" command in the GitHub Copilot extension.

---

Please note that this is a general description based on the provided information. You might want to add more specific details about your extension's functionality and usage in your README file.