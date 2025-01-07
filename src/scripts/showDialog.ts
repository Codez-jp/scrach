// アラートダイアログを表示
const showAlert = (message: string): void => {
  alert(message);
};

// 確認ダイアログを表示
const showConfirm = (message: string): boolean => {
  return confirm(message);
};

// プロンプトダイアログを表示
const showPrompt = (message: string, defaultValue: string = ''): string | null => {
  return prompt(message, defaultValue);
};

// 使用例
showAlert('これはアラートダイアログです');
const isConfirmed = showConfirm('これは確認ダイアログです。続行しますか？');
const userInput = showPrompt('これはプロンプトダイアログです。入力してください。');

console.log(`確認結果: ${isConfirmed}`);
console.log(`ユーザー入力: ${userInput}`);