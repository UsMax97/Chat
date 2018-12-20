var chat = new Vue({
  el: '#chat',
  data: {
    inputMessage: '',
    messages: [] },

  methods: {
    send: function send(evt) {
      console.log(evt);
      evt.preventDefault();
      var element = document.getElementById('messages');
      element.scrollTop = element.scrollHeight;
      this.messages.push({
        message: this.inputMessage });

      this.inputMessage = '';
    } } });