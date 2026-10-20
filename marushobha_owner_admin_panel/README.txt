# Marushobha Owner Admin Panel (starter)

This starter provides a responsive owner panel for adding, editing, listing and deleting products in Cloud Firestore.

## Important
- This is a starter, not a complete store integration.
- Your existing storefront will not automatically show products from this panel until its product listing code reads the same Firestore `products` collection.
- This version accepts product image URLs. Firebase Storage file uploads are not included.
- Google sign-in is used here. Enable Google under Firebase Console → Authentication → Sign-in method.
- Do not put service-account credentials, private keys, or payment/shipping secrets in HTML or GitHub.

## Setup
1. In Firebase Console, open your project and register a Web App if you have not already. Copy the web app config.
2. Open `admin.html` in a code editor. Replace the values in `firebaseConfig` with your actual Firebase web config.
3. Publish the file to your GitHub Pages site, for example as `admin.html`. Do not share its URL publicly as a security measure; security must come from Firebase rules.
4. In Firebase Console → Authentication → Users, sign in to the panel once and copy your own user's UID. If you have not yet signed in, enable Google provider first.
5. Replace `REPLACE_WITH_YOUR_FIREBASE_AUTH_UID` in `admin.html` (`OWNER_UID`) and in `firestore.rules` with that exact UID.
6. In Firebase Console → Firestore Database, create the database if needed. Open Rules, review and publish the rules in `firestore.rules`.
7. In Authentication → Settings → Authorized domains, make sure your GitHub Pages domain is allowed. Firebase may already include some domains; add the domain if needed.
8. Open your panel URL and sign in using the authorised Google account.
9. Test with a non-owner account and verify that it cannot create, update or delete products.

## Security notes
- The UID check in the browser only controls the interface. The Firestore Security Rules are the actual access control.
- The rules above allow unauthenticated reads only for products with `active == true`, so your storefront can display active products. They deny access to other collections.
- If you already have Firestore rules for orders, customers, or other data, do not blindly replace them. Merge the product rule into your existing rules and preserve appropriate access policies.
- Do not use these sample rules as-is if your store needs other collections. Test rules before production.
- The Google provider and the Firebase config must match the same Firebase project used by your website.
- The HTML is not a checkout, payment processor, order-management integration, or Delhivery integration.
