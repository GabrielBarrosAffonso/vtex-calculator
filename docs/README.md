📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# VTEX INTEGER CALCULATOR

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

This app is being created to learn more about React and Typescript, the finality is to add a calculator as a Store framework component inside a VTEX Store.
You will be able to add the Calculator block in your theme and use it to apply different type of operations,

![CalculatorPure](https://user-images.githubusercontent.com/58013759/137795065-43de7b0f-7714-4123-aceb-e9dbe9eb0ee3.png)

## Configuration 

To use this app in your theme you first need to follow the steps below:

1. Adding the app as a theme dependency in the `manifest.json` file;
![dependency](https://user-images.githubusercontent.com/58013759/137796754-196cfbb7-fefa-442e-b1e5-a94917ca178a.jpeg)

2. Declaring the app's main block in a given theme template or inside another block from the theme.
![blockCalculator](https://user-images.githubusercontent.com/58013759/137796721-3b68bba9-5559-4918-b222-0692956b39e9.jpeg)


Remember to add a table with all blocks exported by the app and their descriptions. You can verify an example of it on the [Search Result documentation](https://vtex.io/docs/components/all/vtex.search-result@3.56.1/). 

Next, add the **props table** containing your block's props. 

If the app exports more than one block, create several tables - one for each block. For example:

### `block-1` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |


### `block-2` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |

Prop types are: 

- `string` 
- `enum` 
- `number` 
- `boolean` 
- `object` 
- `array` 

When documenting a prop whose type is `object` or `array` another prop table will be needed. You can create it following the example below:

- `propName` object:

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |


Remember to also use this Configuration section to  **showcase any necessary disclaimer** related to the app and its blocks, such as the different behavior it may display during its configuration. 

## Modus Operandi *(not mandatory)*

There are scenarios in which an app can behave differently in a store, according to how it was added to the catalog, for example. It's crucial to go through these **behavioral changes** in this section, allowing users to fully understand the **practical application** of the app in their store.

If you feel compelled to give further details about the app, such as it's **relationship with the VTEX admin**, don't hesitate to use this section. 

## Customization

The first thing that should be present in this section is the sentence below, showing users the recipe pertaining to CSS customization in apps:

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`

Thereafter, you should add a single column table with the available CSS handles for the app, like the one below. Note that the Handles must be ordered alphabetically.

| CSS Handles |
| ----------- | 
| `XXXXX` | 
| `XXXXX` | 
| `XXXXX` | 
| `XXXXX` | 
| `XXXXX` |


If there are none, add the following sentence instead:

`No CSS Handles are available yet for the app customization.`

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
