---
title: How To Create A Payments-Only Restaurant
---
## Introduction

This document serves as a detailed guide for creating a new Payments-Only Restaurant within the EatMe Global Admin Panel.

## Getting Started

To begin, navigate to the Admin Panel website and authenticate using your authorized email address and password.

![Login UI](/img/login-custom-.png "Login UI")

## Adding a Payments-Only Restaurant

**Note:** Certain fields are non-essential and can be disregarded as outlined in this guide.

Upon successful authentication, the system will redirect you to the Admin Panel interface.

![Admin Panel UI](/img/home-custom-.png "Admin Panel UI")

To initiate the creation of a Payments-Only Restaurant, access the **Restaurant** dropdown from the side navigation menu on the left, then select **Create Restaurant**.

![Add a new Restaurant](/img/create-restaurant-custom-.png "Add a new Restaurant")

### Restaurant Details

Populate the following fields with the appropriate restaurant information:

- **Restaurant Name**
- **Suburb**
- **Address**
- **Contact Number**
- **Mobile Number**
- **Latitude & Longitude**
- **Google Map Link**

For latitude and longitude extraction:

1. Locate the restaurant on Google Maps.
2. Copy the page URL and extract the latitude and longitude values as demonstrated below.
3. Example URL: `https://www.google.com/maps/place/Champion+Hotel/@1.3142633,103.8981148,17.14z/data=!3m1!5s0x31da1810de257e55:0xb672453c5681d682!4m15!1m5!3m4!2zMcKwMTknMDAuOCJOIDEwM8KwNTQnMDEuNyJF!8m2!3d`**1.3168913**`!4d`**103.9004756**`!3m8!1s0x31da1810de3b7785:0xf27e433cae335ed0!5m2!4m1!1i2!8m2!3d1.3147698!4d103.8983936!16s%2Fg%2F11b6b0tj9y?entry=ttu`
4. The highlighted sections correspond to **Latitude** = 1.3168913 and **Longitude** = 103.9004756. Extract these values accordingly.

![Restaurant Details](/img/restaurant-details-custom-.png "Restaurant Details")

Configure the following parameters:

- **Delivery Radius (KM)** - Default: 10
- **Ping Radius (KM)** - Default: 5
- **Direct Delivery Radius (KM)** - Default: 10
- **Restaurant Preparation Time (Min)** - Default: 25

**Note:** The fields **What's New/Featured** and **Restaurant Category** are optional and can be skipped.

Additional details:

1. **Delivery Radius** defines the maximum range for restaurant deliveries.
2. **Ping Radius** is the distance covered around a pinned location, forming a circular area.
3. **Direct Delivery Radius** specifies the range within which the restaurant delivers using its own logistics.

![Delivery Radius](/img/delivery-ranges-custom-.png "Delivery Radius")

### Restaurant Type

Select the **Payments Only** option. This will automatically disable the **Service Types** section, as it is irrelevant for this configuration.

![Restaurant Type Selection](/img/restaurant-type-custom-.png "Restaurant Type Selection")

### Service Types

In most cases, the **Service Types** section is disabled when **Payments Only** is selected. However, if applicable, enable the following options:

- **Delivery**
- **Pick up**
- **Dine-in** (for Mobile Service Types)
- **Dine-in and Pick up** (for Web Service Types)

For Web Service Types:

- Set the **Manager Name** to the restaurant Sales Manager’s name.
- Select the **Restaurant Category** based on the restaurant's specific characteristics.

![Restaurant service types selection](/img/restaurant-type-service-types-custom-.png "Restaurant service types selection")

In the **Tax and Payment Types** section:

- Set **Pickup Service Charge** and **Per Order Charge** to zero (0).
- Leave the **Web App Payment Types** checkboxes unchecked, as they are unnecessary.

**Note:** The **GST**, **Per Order Minimum Charge**, and **Dine-in Service Charges** are predefined and cannot be altered.

![Tax and payment types](/img/web-service-types-custom-.png "Tax and payment types")

### Wallet Types

This section pertains to digital wallet payment methods. No options need to be enabled; all should remain in their default (off) state.

![Wallet Types](/img/wallet-charges-custom-.png "Wallet Types")

### Pickup Web Link Options & Delivery Web Link Options

These sections do not require any modifications; leave all options at their default setting (**No**).

![Pickup Web Link Options & Delivery Web Link Option](/img/restaurant-pickup-web-link-options-delivery-web-link-options-custom-.png "Pickup Web Link Options & Delivery Web Link Option")

### Billing Type Details

Set the **Billing Type** to **Unlimited** and configure the **Unlimited Charge Per Month** to zero (0).

**Note:** The **Free Tier** billing type is currently not in use.

![Billing type Details](/img/billing-type-custom-.png "Billing type Details")

### Transaction Charges

Set the values for **Local Cards**, **International Cards**, and other payment methods according to the client's agreement.

**Note:** The **Online** and **Offline** transaction fees are also determined by the agreement.

![Transaction charging rates](/img/transaction-charges-custom-.png "Transaction charging rates")

### Business Details

Fill in the business-specific details provided by the client. These are critical fields, including the **Registered PVS/UEN** (business identification number).

![Business Details](/img/business-details-custom-.png "Business Details")

### Restaurant Opening Hours

Set the restaurant's active hours, which will be displayed on the website. Use the clock icon or manually enter the time.

- Use the **Set At Once** button to apply the same opening and closing times across all days.

**Note:** Timing can be customized for individual days if necessary.

![Restaurant Opening Hours](/img/opening-hours-custom-.png "Restaurant Opening Hours")

### Restaurant Auto Pause

Configure the **Auto Pause** feature to specify the restaurant's inactive hours (e.g., lunch breaks).

- Set the start and end times using the clock icon or by entering the time manually. This applies to both the website and the merchant app.

**Note:** This feature is useful for restaurants that provide delivery and pickup services and is applicable to all days.

![Restaurant Auto Pause](/img/auto-pause-custom-.png "Restaurant Auto Pause")

### Cuisine Types and Diet Types

**Note:** This section is optional and can be left in its default state.

![Cuisine Types and Diet Types](/img/food-and-diet-types-custom-.png "Cuisine Types and Diet Types")

### Restaurant Images

Upload an image of the restaurant, either provided by the client or sourced online.

- The **Tax Ratio** is fixed and cannot be changed.
- The **Facilities** and **Restaurant Management System Link** fields are optional and can remain in their default state.
- Upload the restaurant's logo, either provided by the client or sourced online.

![Restaurant Images](/img/restaurant-images-custom-.png "Restaurant Images")

### Receipt Details

**Note:** This section is optional and can be left in its default state.

![Receipt Details](/img/receipt-details-custom-.png "Receipt Details")

### Final Step

Ensure all required fields are populated, then click the **Add** button at the bottom of the receipt details section to finalize the creation of the restaurant.

![Creating the new restaurant](/img/add-restaurant-custom-.png "Creating the new restaurant")
