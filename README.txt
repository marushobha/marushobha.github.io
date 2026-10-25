MARUSHOBHA SIGN-IN + BAG/WISHLIST PACKAGE

Files to upload to the same deployed website folder:
- product.html (updated sign-in modal with Google + phone OTP)
- bag.html (Firebase-backed personal bag; Google + phone OTP sign-in)
- wishlist.html (Firebase-backed personal wishlist; Google + phone OTP sign-in)
- firestore-customerData-rules.txt (security rules snippet and setup checklist)

Keep your existing index.html, assets folder, and products.json unchanged. Product page uses existing assets/product paths and its current catalogue fallback.

Before testing, enable Google and Phone providers in Firebase Authentication, add marushobha.com to Authorized domains, and merge the supplied rules block into your EXISTING Firestore rules. Do not replace your whole rules file with the snippet.

These files have been updated in the package, but they have not been tested against your live Firebase project. Deploy and test both Google sign-in and phone OTP over HTTPS. Google and phone may result in separate customer accounts/UIDs unless you implement account linking.
