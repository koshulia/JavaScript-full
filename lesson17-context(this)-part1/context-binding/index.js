export const callbackPrompt = {
  message: 'Share your number',
  showPrompt() {
    prompt(this.message);
  },
  showDeferredPrompt: function (ms) {
    setTimeout(() => this.showPrompt(), ms);
  },
};

callbackPrompt.showDefferedPrompt(1000);
