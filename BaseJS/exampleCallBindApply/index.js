//callbackPrompt

const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt: function() {
    const number = prompt(this.message);
    console.log(number);
  },
  showDeferredPrompt: function(ms) {
    setTimeout(this.showPrompt.bind(callbackPrompt), ms);
  }
}
// callbackPrompt.showPrompt();
callbackPrompt.showDeferredPrompt(3000);
