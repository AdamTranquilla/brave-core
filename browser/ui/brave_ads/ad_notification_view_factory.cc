/* Copyright (c) 2020 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "brave/browser/ui/brave_ads/ad_notification_view_factory.h"

#include "brave/browser/ui/brave_ads/text_ad_notification_view.h"

namespace brave_ads {

// static
AdNotificationView* AdNotificationViewFactory::Create(
    const AdNotification& ad_notification) {
  AdNotificationView* ad_notification_view =
      new TextAdNotificationView(ad_notification);

  return ad_notification_view;
}

}  // namespace brave_ads
