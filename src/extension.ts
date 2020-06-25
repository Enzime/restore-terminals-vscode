// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import restoreTerminals from './restoreTerminals';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('restore-terminals is now active!');

	const shouldRunOnStartup: boolean | undefined = vscode.workspace.getConfiguration("restoreTerminals").get("runOnStartup")



	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	if (shouldRunOnStartup) {
		await restoreTerminals() //run on startup

	}

	let disposable = vscode.commands.registerCommand('restore-terminals.restoreTerminals', async () => {

		await restoreTerminals()

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
