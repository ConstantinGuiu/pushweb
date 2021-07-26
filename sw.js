self.addEventListener('push', () => {
  let options = {
    body: 'Here is a notification body!',
    icon: 'https://staging.frontliners.ai/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {action: 'explore', title: 'See your FL notifications',
        icon: 'images/checkmark.png'},
      {action: 'close', title: 'I don\'t want any of this',
        icon: 'images/xmark.png'},
    ]
  };
  self.registration.showNotification('We have CTAs now!', options);
});
