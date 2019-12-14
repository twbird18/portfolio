function show() {

    var about = document.getElementById("about");
    var foot = document.getElementsByClassName("footer");
    var nav = document.getElementsByClassName("navigation");

    nav[0].style.display = 'none';
    foot[0].style.display = 'none';
    about.style.display = 'none';
    document.getElementById('aboutme').innerHTML= '<iframe src="https://docs.google.com/document/d/e/2PACX-1vT8xyUSM4n0AL8SsxKsa5kvPQlXFf6nzQqo4P0o2hQ92Y0JJYxKegvhk-KhZicZ_UttX50vDzzcKFc4/pub?embedded=true"></iframe>';
    document.getElementById('aboutme').style.gridRow = '1/2';
}