// 模块“vscode”包含VS Code可扩展性API
// 导入模块，并在下面的代码中使用别名vscode引用该模块
import * as vscode from 'vscode';

// 激活您的扩展程序时将调用此方法
// 您的扩展程序在第一次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {

	// 使用控制台输出诊断信息（console.log）和错误（console.error）
	// 这行代码仅在激活您的扩展程序后才执行一次
	console.log('Congratulations, your extension "fixsync" is now active!');

	// 该命令已在package.json文件中定义
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('fixsync.syncSettings', () => {
		// 每次执行命令时都会执行您放置在此处的代码
		vscode.workspace.getConfiguration().update('fixsync.username', '');
		console.log(vscode.workspace.getConfiguration().get('fixsync.username'));


		// 向用户显示消息框
		// vscode.window.showInformationMessage('Hello World from fixsync!');
	});

	context.subscriptions.push(disposable);
}

// 停用您的扩展程序时调用此方法
export function deactivate() { }
