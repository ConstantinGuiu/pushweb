self.addEventListener('push', () => {
  let options = {
    body: 'Here is a notification body!',
    icon: 'https://staging.frontliners.ai/img/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore', title: 'See your FL notifications',
        icon: 'images/checkmark.png'
      },
      {
        action: 'close', title: 'Close notification',
        icon: 'images/xmark.png'
      },
    ]
  };
  self.registration.showNotification('We have CTAs now!', options);
});

self.addEventListener('notificationclick', function (e) {
  var notification = e.notification;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('https://staging.frontliners.ai/owner/');
    notification.close();
  }
});