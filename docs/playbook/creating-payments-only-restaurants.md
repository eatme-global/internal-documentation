---
title: Creating Payments-Only Restaurants
---
## Introduction

This document contains a comprehensive guide of the process to create a new Payments only Restaurant in the EatMe Global Admin Panel.

## Getting Started

* To start things the first step is to open the Website and sign into the Admin Panel by entering the authorized email and password as illustrated below.

![Login UI](/img/login-custom-.png "Login UI")

## Adding A Payments-Only Restaurant

**NOTE :** Certain information are not required, therefore they shall be ignored as demonstrated in the guide.

* Once the login is successful the user will be redirected to the UI of the Admin Panel UI.

![Admin Panel UI](/img/home-custom-.png "Admin Panel UI")

* To create a Payments-Only Restaurant click on the restaurant dropdown located at the side navigation menu on the left and then select create restaurant.

![Add a new Restaurant](/img/create-restaurant-custom-.png "Add a new Restaurant")

### Restaurant Details :

* Enter these fields (Restaurant Name, Suburb, Address, Contact Number, Mobile Number, Latitude & Longitude, Google Map Link) regarding the restaurant information.
* For more information:

1. To get the latitude & longitude find the place on maps and then select it..
2. Then copy the URL of the page and extract it as demonstrated below.
3. Example link : `https://www.google.com/maps/place/Champion+Hotel/@1.3142633,103.8981148,17.14z/data=!3m1!5s0x31da1810de257e55:0xb672453c5681d682!4m15!1m5!3m4!2zMcKwMTknMDAuOCJOIDEwM8KwNTQnMDEuNyJF!8m2!3d`**1.3168913**`!4d`**103.9004756**`!3m8!1s0x31da1810de3b7785:0xf27e433cae335ed0!5m2!4m1!1i2!8m2!3d1.3147698!4d103.8983936!16s%2Fg%2F11b6b0tj9y?entry=ttu`
4. Therefore Example states the **Latitude** = 1.3168913 & **Longitude** = 103.9004756
5. The highlighted sections indicate the Latitude & Longitude, therefore it shall be extracted as the examples stated above.

![Restaurant Details ](/img/restaurant-details-custom-.png "Restaurant Details")

* Enter these fields (Delivery Radius (KM) - Default value (10), Ping Radius (KM) - Default value (5),Direct Delivery Radius (KM) - Default value (10), Restaurant Preparation Time (Min) - Default value (25)).
* Skip the What's New/Featured and restaurant category fields which aren't required..
* For more information : 

1. Delivery Radius is the maximum delivery distance range that the restaurant offers.
2. Ping Radius a radius that can be set around a pinned location which covers a certain distance that makes a circle around it.
3. Direct Delivery Radius is the range that the restaurant offers to deliver items to the customers using their own means within the given distance.

![Delivery Radius](/img/delivery-ranges-custom-.png "Delivery Radius")

### Restaurant Type :

* The payments only option has to be checked and the service types section gets disabled since this is the method that is being used at the company.

![Restaurant Type Selection](/img/restaurant-type-custom-.png "Restaurant Type Selection")

### Service Types :

* This section is often disabled since payments only is selected, however in rare occasions this may be used and check only (Delivery, Pick up, Dine-in for Mobile Service Types and Dine-in and Pick up for Web Service Types).
* For the Web Service Types the manager name has to be the restaurant Sales Manager’s name and the restaurant category has to be selected depending on the characteristics of the restaurant.

![Restaurant service types selection](/img/restaurant-type-service-types-custom-.png "Restaurant service types selection")

* For the tax and payment types section set the pickup service charge and per order charge to the value zero (0).
* The Web app payment types checkboxes should not be checked as it is not required. Refer to figure 3.7.
* **NOTE :** GST, Per Order Minimum Charge and Dine-in Service charges are set to a default value and cannot be changed.

![Tax and payment types](/img/web-service-types-custom-.png "Tax and payment types")

### Wallet Types :

* This section contains digital wallet payment methods and is not required to enable any of the payment methods, therefore leave every option turned off.

![Wallet Types](/img/wallet-charges-custom-.png "Wallet Types")

### Pickup Web Link Options & Delivery Web Link Options :

* These sections don’t require selecting options and leave it in its default value (No).

![Pickup Web Link Options & Delivery Web Link Option](/img/restaurant-pickup-web-link-options-delivery-web-link-options-custom-.png "Pickup Web Link Options & Delivery Web Link Option")

### Billing type Details :

* Select the billing type to the value unlimited and set the unlimited charge per month to the value zero (0).
* **Note :** The Free tier billing type method is not being used currently.

![Billing type Details](/img/billing-type-custom-.png "Billing type Details")

### Transaction charges :

* Local cards, International cards and other cards value depend on the client’s agreement, therefore it shall be set according to it. 
* **Note:** The online and offline transaction fee will be defined depending on the agreement.

![Transaction charging rates](/img/transaction-charges-custom-.png "Transaction charging rates")

### Business Details :

* These are partner specific and important details that should be filled that are provided by the client. 
* For more information : 

1. Registered PVS/ UEN is an identification number for the registered business.

![Business Details](/img/business-details-custom-.png "Business Details")

### Restaurant Opening Hours :

* This section contains information regarding the restaurant active hours that will be indicated in the website.
* The time should be set by clicking the clock icon or entering it manually.
* The time can be set to all 7 days by clicking the Set At Once button as highlighted after the opening and closing time has been set.
* **Note:** Timings can be set individually to specific days.

![Restaurant Opening Hours](/img/opening-hours-custom-.png "Restaurant Opening Hours")

### Restaurant Auto Pause :

* The auto pause section indicates restaurant inactive timings. ex : Lunch Break.
* The auto pause start and end time should be set by clicking the clock icon and setting it or by manually entering it, this can be applied to both the website and merchant app . Refer to figure 3.14
* **Note:** This is used when the restaurant that provides delivery and pickup services, This will be applicable for all days

![Restaurant Auto Pause](/img/auto-pause-custom-.png "Restaurant Auto Pause")

### Cuisine Types and Diet Types:

* **Note:** This section can be set in its default value  since it's not required.

![Cuisine Types and Diet Types](/img/food-and-diet-types-custom-.png "Cuisine Types and Diet Types")

### Restaurant Images:

* Upload an image of the restaurant provided by the client or by finding it online.
* The Tax Ratio cannot be changed, therefore it can remain in its default value.
* The facilities and restaurant management system link isn't required therefore it can be in its default state.
* Upload the logo of the restaurant provided by the client or by finding it online.

![Restaurant Images](/img/restaurant-images-custom-.png "Restaurant Images")

### Receipt Details :

* **Note:** This section can be left as default since it's not required.

![Receipt Details](/img/receipt-details-custom-.png "Receipt Details")

### Final step :

* Finally make sure all required fields have been entered and click the ADD button at the bottom of the receipt details section to add the restaurant.

![Creating the new restaurant](/img/add-restaurant-custom-.png "Creating the new restaurant")



**NOTE : THIS ISN'T THE FINAL VERSION**
