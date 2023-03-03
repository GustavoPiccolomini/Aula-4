const posts = [
{
    title: "Google Chorme",
    content: "Google Chorme is a web browser developed by Google, release in 2008. Chorme is the world's most popular web browser today!"
},
{
    title: "Mozilla Firefox",
    content: "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018."

},
{
    title: "Microsoft Edge",
    content: "Microsoft Edge is an open-source web browser developed by Microsoft. Edge has been the most popular web browser since January, 2018."

},
];

const wrapper = document.getElementById("posts");

for (var i = 0; i < posts.length; i ++) {
const postData = posts[i];

const article = document.createElement("article");
article.classList.add("article");

const title = document.createElement("h2")
title.classList.add("article-title");
const titleTex = document.createTextNode(postData.title);
title.appendChild(titleTex);
article.appendChild(title);

const content = document.createElement("p");
const contentText = document.createTextNode(postData.content);
content.appendChild(contentText);
content.appendChild(content)

wrapper.appendChild(article)

}