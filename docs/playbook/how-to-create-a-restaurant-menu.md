---
title: How To Create A POS Restaurant Menu
---
## 1. Introduction

This document serves as a detailed guide for creating a new POS Restaurant Menu.

---

## 2. Creating a Menu Template for Data Extraction

This guide provides instructions on creating a structured spreadsheet template for extracting and organizing menu data provided by restaurants. The template is designed to standardize the data collection process, ensuring consistency and completeness. The following sections outline the steps and components of the template.

### 2.1 Create a New Spreadsheet

- Open your preferred spreadsheet application (e.g., Microsoft Excel, Google Sheets).
- Create a new spreadsheet and name it appropriately, such as "Restaurant Menu Data" or "Setup".

---

### 2.2 Column Headers

- In the first row, create the following column headers to capture the necessary information:
  - **Category**
  - **Sub-Category**
  - **Item Name**
  - **Description**
  - **Choices**
  - **Add-Ons**
  - **Price**
  - **Notes**
  - **Status**

---

## 3. Template Layout

### 3.1 Category and Sub-Category

- Create a column for the main category of the menu items. Examples of categories include **Desserts, Beverages, Snacks**, etc.
- Create a column for any sub-categories under the main category. For example, under Desserts, you might have sub-categories like **Ice Creams, Chocolate Mousse, or Cheesecakes**.

---

### 3.2 Item Details

- Create a column for entering the name of the menu item.
- Create a column for providing a brief description of the menu item.

---

### 3.3 Choices and Add-Ons

- Create a column for listing any choices available for the item, such as different sizes, flavors, or preparation methods.
- Create a column for listing any available add-ons for the item, such as extra toppings or sides.

---

### 3.4 Pricing

- Create a column for entering the price of the menu item. Note that some item prices might be zero and will be determined according to the choices selected. For example, a base item might have a price of $0.00, and the final price will depend on the selected choices listed in the Choices column.

---

### 3.5 Additional Notes

- Create a column for entering any additional notes or comments relevant to the item, such as special instructions or dietary information.

---

### 3.6 Status

- Create a column for tracking the status of each item using a dropdown menu. The dropdown should have the following values:
  - To Add
  - In Progress
  - Completed
- This column helps monitor the progress of data entry and ensures all items are accounted for.

---

## 4. Subsections for Add-Ons and Choices

### 4.1 Add-Ons Group

- Create a subsection within the spreadsheet for different groups of add-ons. This section should include columns for:
  - **Name**
  - **Price**
  - **Status**

---

### 4.2 Choice Groups

- Create separate groups for different choice categories (e.g., sizes, flavors). Each group should have columns for:
  - **Choice**
  - **Price** (if applicable; if all choices have the same price, this column can be left blank since the price will be on the item)
  - **Status**

---

## 5. Adding the Items

To begin adding items, log in to the Backoffice using your account credentials. Once logged in, navigate to the **Menu** section, and then click on **Categories** to start adding the categories.

### 5.1 Categories

- Click the **Create Category** button.
- Enter the **Category Name**.
- The **Description** field is optional and can be skipped if not required.
- Ensure the **Status** is set to **Available** so it shows up in the POS system.
- Press the **Create** button to finalize.

---

### 5.2 Sub-categories

- Navigate to the **Subcategories** section.
- Click the **Create Subcategory** button.
- Enter the **Subcategory Name**.
- The **Description** is optional and can be skipped if not required.
- Ensure the **Status** is set to **Available** so it shows up in the POS system.
- Press the **Create** button.

---

### 5.3 Modifiers (Choices / Add-Ons)

### 5.3.1 Choices

- Navigate to the **Choices** section under **Modifiers**.
- Click the **Create Choices** button.
- Enter the **Choice Group Name**.
- The **Description** field is optional.
- Set the **Status** to **Available** to ensure the choice is visible.
- Enter the **Item Name** and **Price** in the respective fields.
- Click the **Add** button after each choice item, repeating the process for all choices.
- Added items will appear in a table below.
- Set the choice as **Required** or **Optional**.
- Select the **Minimum** and **Maximum** number of choices from the dropdown.
- Press the **Create** button to save the choices.

---

#### 5.3.2 Add-Ons

- Go to the **Add-ons** section under **Modifiers**.
- Click the **Create Add-ons** button.
- Enter the **Add-on Group Name**.
- The **Description** is optional.
- Set the **Status** to **Available** so the group is visible.
- Enter the **Add-on Item Name** and **Price**.
- Select the **Maximum number of Add-ons per item**.
- Click the **Add** button after each add-on item, repeating the process.
- Set the **Maximum Add-on Limit** using the dropdown at the top of the add-ons section.
- Once all items are added, click the **Create** button to finalize.

---

### 5.4 Items

**Note:** Items should be added after all **Categories**, **Sub-categories**, and **Modifiers** have been created.

- Navigate to the **Items** section.
- Click the **Create Item** button.
- Enter the **Item Name**.
- Select the **Category** and **Subcategory** if applicable.
- The **Description** field is optional.
- Set the **Status** to **Available**.
- Fill in the **Price** using the menu data.
  - **Note:** Some items may have a price of 0 if the price is based on choices.
  - Refer to the menu data extraction process if unsure.

---

### 5.4.1 Choices

- The created choices will appear in a list.
- Enable the switch for specific items that need choices to be active.

---

### 5.4.2 Add-ons

- The created add-ons will appear in a list.
- Enable the switch for specific items that need add-ons to be active.

---

### 5.4.3 Receipt Notes

- This section is optional and can be skipped.

---

### 5.4.4 Item Image

- Upload the image of the item by dragging and dropping it into the designated section.
- This section can be skipped as it is optional.

---

## 6. Final Step

- Finally, click the **Create** button once all required information is filled out.
