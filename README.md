# Bhashini Translation Plugin - Magento 2 Module

## Overview
This module injects the BHASHINI Translation Plugin v3 into Magento 2 storefronts by adding a container and loading the official script at the end of the page body. It keeps the integration minimal so the plugin's own logic handles language selection, glossary, skip classes, and preferred-language storage.

## Installation (manual)
1. Copy the `Bhashini/Translation` folder into `app/code/` so the module path becomes `app/code/Bhashini/Translation`.
2. From Magento root run:

```bash
php bin/magento module:enable Bhashini_Translation
php bin/magento setup:upgrade
php bin/magento setup:static-content:deploy -f
php bin/magento cache:clean
```

3. Ensure your website domain is registered & approved in the Bhashini dashboard (`https://dashboard.bhashini.co.in/user/login`) and that the plugin application access is granted for your domain.

## Customization
- Change placement: edit `view/frontend/templates/bhashini_script.phtml` to move the container or alter classes.
- Skip translation: add `class="bhashini-skip-translation"` to any element you want to exclude from translation.
- Reinit after AJAX: require `Bhashini_Translation/js/bhashini-reinit` where needed and call the returned function.

## Uninstall
1. Disable module:

```bash
php bin/magento module:disable Bhashini_Translation
php bin/magento setup:upgrade
php bin/magento cache:flush
```

2. Remove `app/code/Bhashini/Translation` directory.

## Notes
- The module uses the official script URL: `https://translation-plugin.bhashini.co.in/v3/website_translation_utility.js`.
- This module intentionally keeps server-side footprint minimal; glossary and domain mapping are handled via Bhashini's onboarding dashboard.