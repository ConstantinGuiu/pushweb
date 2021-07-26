self.addEventListener('push', () => {
  self.registration.showNotification('Hello there, world!', options);
});
