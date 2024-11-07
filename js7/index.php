<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <h1 id="setColor">Set your color</h1>
    
    <div id="container">
        <div id="allItems">
            <input type="text" placeholder="Name" id="name">
            <input type="color" id="bgColor">
            <button id="save">Save</button>
            <button id="clear">Clear</button>
        </div>

        <div id="cardsContain"></div>
    </div>

    <script src="script.js"></script>
    <script src="js-cookie/dist/js.cookie.min.js"></script>
</body>
</html>