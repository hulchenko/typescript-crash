var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership); //1
console.log(membershipReverse); //Premium
// ---
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["Facebook"] = "Facebook";
    SocialMedia["Instagram"] = "Instagram";
    SocialMedia["YouTube"] = "YouTube";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.Instagram;
console.log(social);
