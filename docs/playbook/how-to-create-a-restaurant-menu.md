---
"0": T
"1": h
"2": i
"3": s
"4": " "
"5": d
"6": o
"7": c
"8": u
"9": m
"10": e
"11": n
"12": t
"13": " "
"14": s
"15": e
"16": r
"17": v
"18": e
"19": s
"20": " "
"21": a
"22": s
"23": " "
"24": a
"25": " "
"26": d
"27": e
"28": t
"29": a
"30": i
"31": l
"32": e
"33": d
"34": " "
"35": g
"36": u
"37": i
"38": d
"39": e
"40": " "
"41": f
"42": o
"43": r
"44": " "
"45": c
"46": r
"47": e
"48": a
"49": t
"50": i
"51": n
"52": g
"53": " "
"54": a
"55": " "
"56": n
"57": e
"58": w
"59": " "
"60": P
"61": O
"62": S
"63": " "
"64": R
"65": e
"66": s
"67": t
"68": a
"69": u
"70": r
"71": a
"72": n
"73": t
"74": " "
"75": M
"76": e
"77": n
"78": u
"79": .
title: How To Create A POS Restaurant Menu
---

# 1. Creating a Menu Template for Data Extraction
This guide provides instructions on creating a structured spreadsheet template for extracting and organizing menu data provided by restaurants. The template is designed to standardize the data collection process, ensuring consistency and completeness. The following sections outline the steps and components of the template.

---

## 1.1 Create a New Spreadsheet
- Open your preferred spreadsheet application (e.g., Microsoft Excel, Google Sheets).
- Create a new spreadsheet and name it appropriately, such as "Restaurant Menu Data" or "Setup".

---

## 1.2 Column Headers
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

# 2. Template Layout

---

## 2.1 Category and Sub-Category
- Create a column for the main category of the menu items. Examples of categories include **Desserts, Beverages, Snacks**, etc.
- Create a column for any sub-categories under the main category. For example, under Desserts, you might have sub-categories like **Ice Creams, Chocolate Mousse, or Cheesecakes**.

---

## 2.2 Item Details
- Create a column for entering the name of the menu item.
- Create a column for providing a brief description of the menu item.

---

## 2.3 Choices and Add-Ons
- Create a column for listing any choices available for the item, such as different sizes, flavors, or preparation methods.
- Create a column for listing any available add-ons for the item, such as extra toppings or sides.

---

## 2.4 Pricing
- Create a column for entering the price of the menu item. Note that some item prices might be zero and will be determined according to the choices selected. For example, a base item might have a price of $0.00, and the final price will depend on the selected choices listed in the Choices column.

---

## 2.5 Additional Notes
- Create a column for entering any additional notes or comments relevant to the item, such as special instructions or dietary information.

---

## 2.6 Status
- Create a column for tracking the status of each item using a dropdown menu. The dropdown should have the following values:
  - To Add
  - In Progress
  - Completed
- This column helps monitor the progress of data entry and ensures all items are accounted for.

---

# 3. Subsections for Add-Ons and Choices

---

## 3.1 Add-Ons Group
- Create a subsection within the spreadsheet for different groups of add-ons. This section should include columns for:
  - **Name**
  - **Price**
  - **Status**

---

## 3.2 Choice Groups
- Create separate groups for different choice categories (e.g., sizes, flavors). Each group should have columns for:
  - **Choice**
  - **Price** (if applicable; if all choices have the same price, this column can be left blank since the price will be on the item)
  - **Status**

---

# 4. Adding the Items

To begin adding items, log in to the Backoffice using your account credentials. Once logged in, navigate to the **Menu** section, and then click on **Categories** to start adding the categories.

---

## 4.1 Categories

1. Click the **Create Category** button.
2. Enter the **Category Name**.
3. The **Description** field is optional and can be skipped if not required.
4. Ensure the **Status** is set to **Available** so it shows up in the POS system.
5. Press the **Create** button to finalize.

---

## 4.2 Sub-categories

1. Navigate to the **Subcategories** section.
2. Click the **Create Subcategory** button.
3. Enter the **Subcategory Name**.
4. The **Description** is optional and can be skipped if not required.
5. Ensure the **Status** is set to **Available** so it shows up in the POS system.
6. Press the **Create** button.

---

## 4.3 Modifiers (Choices / Add-Ons)

---

### 4.3.1 Choices

1. Navigate to the **Choices** section under **Modifiers**.
2. Click the **Create Choices** button.
3. Enter the **Choice Group Name**.
4. The **Description** field is optional.
5. Set the **Status** to **Available** to ensure the choice is visible.
6. Enter the **Item Name** and **Price** in the respective fields.
7. Click the **Add** button after each choice item, repeating the process for all choices.
8. Added items will appear in a table below.
9. Set the choice as **Required** or **Optional**.
10. Select the **Minimum** and **Maximum** number of choices from the dropdown.
11. Press the **Create** button to save the choices.

---

### 4.3.2 Add-Ons

1. Go to the **Add-ons** section under **Modifiers**.
2. Click the **Create Add-ons** button.
3. Enter the **Add-on Group Name**.
4. The **Description** is optional.
5. Set the **Status** to **Available** so the group is visible.
6. Enter the **Add-on Item Name** and **Price**.
7. Select the **Maximum number of Add-ons per item**.
8. Click the **Add** button after each add-on item, repeating the process.
9. Set the **Maximum Add-on Limit** using the dropdown at the top of the add-ons section.
10. Once all items are added, click the **Create** button to finalize.

---

## 4.4 Items

**Note:** Items should be added after all **Categories**, **Sub-categories**, and **Modifiers** have been created.

1. Navigate to the **Items** section.
2. Click the **Create Item** button.
3. Enter the **Item Name**.
4. Select the **Category** and **Subcategory** if applicable.
5. The **Description** field is optional.
6. Set the **Status** to **Available**.
7. Fill in the **Price** using the menu data.
   - **Note:** Some items may have a price of 0 if the price is based on choices.
   - Refer to the menu data extraction process if unsure.

---

### 4.4.1 Choices

- The created choices will appear in a list.
- Enable the switch for specific items that need choices to be active.

---

### 4.4.2 Add-ons

- The created add-ons will appear in a list.
- Enable the switch for specific items that need add-ons to be active.

---

### 4.4.3 Receipt Notes

- This section is optional and can be skipped.

---

### 4.4.4 Item Image

- Upload the image of the item by dragging and dropping it into the designated section.
- This section can be skipped as it is optional.

---

Finally, click the **Create** button once all required information is filled out.
