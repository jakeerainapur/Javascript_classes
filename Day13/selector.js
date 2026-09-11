```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Selectors Examples</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 30px;
        }

        .box {
            padding: 10px;
            margin: 10px 0;
            border: 1px solid black;
        }

        .highlight {
            background-color: yellow;
        }
    </style>
</head>

<body>

    <h1 id="title">DOM Selector Examples</h1>

    <p class="text">First paragraph</p>
    <p class="text">Second paragraph</p>
    <p class="text">Third paragraph</p>

    <div class="box">Box 1</div>
    <div class="box">Box 2</div>

    <button id="myButton">Click Me</button>

    <ul id="list">
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>


    <script>

        // =====================================================
        // 1. getElementById()
        // =====================================================

        const title = document.getElementById("title");

        title.style.color = "blue";

        console.log("getElementById:", title);


        // =====================================================
        // 2. getElementsByClassName()
        // =====================================================

        const texts = document.getElementsByClassName("text");

        console.log("getElementsByClassName:", texts);

        texts[0].style.color = "red";
        texts[1].style.color = "green";


        // =====================================================
        // 3. getElementsByTagName()
        // =====================================================

        const paragraphs = document.getElementsByTagName("p");

        console.log("getElementsByTagName:", paragraphs);

        paragraphs[2].style.fontWeight = "bold";


        // =====================================================
        // 4. querySelector()
        // =====================================================

        // Selects the FIRST matching element

        const firstText = document.querySelector(".text");

        firstText.style.backgroundColor = "lightblue";

        console.log("querySelector:", firstText);


        // =====================================================
        // 5. querySelectorAll()
        // =====================================================

        // Selects ALL matching elements

        const allTexts = document.querySelectorAll(".text");

        console.log("querySelectorAll:", allTexts);

        allTexts.forEach(function(element) {
            element.style.padding = "5px";
        });


        // =====================================================
        // 6. querySelector() using ID
        // =====================================================

        const button = document.querySelector("#myButton");

        console.log("Button:", button);


        // =====================================================
        // 7. querySelector() using Tag
        // =====================================================

        const heading = document.querySelector("h1");

        console.log("Heading:", heading);


        // =====================================================
        // 8. querySelector() using Class
        // =====================================================

        const box = document.querySelector(".box");

        box.style.border = "3px solid blue";


        // =====================================================
        // 9. querySelectorAll() using Class
        // =====================================================

        const boxes = document.querySelectorAll(".box");

        boxes.forEach(function(box) {
            box.style.backgroundColor = "lightgray";
        });


        // =====================================================
        // 10. querySelectorAll() using Tag
        // =====================================================

        const listItems = document.querySelectorAll("li");

        listItems.forEach(function(item) {
            item.style.margin = "5px";
        });


        // =====================================================
        // 11. CSS Selector - ID
        // =====================================================

        const title2 = document.querySelector("#title");

        console.log("ID selector:", title2);


        // =====================================================
        // 12. CSS Selector - Class
        // =====================================================

        const text2 = document.querySelector(".text");

        console.log("Class selector:", text2);


        // =====================================================
        // 13. CSS Selector - Attribute
        // =====================================================

        const button2 = document.querySelector("button[id='myButton']");

        console.log("Attribute selector:", button2);


        // =====================================================
        // 14. Descendant Selector
        // =====================================================

        const list = document.querySelector("#list li");

        console.log("First li inside list:", list);


        // =====================================================
        // 15. Child Selector
        // =====================================================

        const directChild = document.querySelector("#list > li");

        console.log("Direct child:", directChild);


        // =====================================================
        // BUTTON EVENT
        // =====================================================

        button.addEventListener("click", function() {

            title.textContent = "Button Clicked!";

            title.classList.add("highlight");

            console.log("Button was clicked!");

        });

    </script>

</body>
</html>
```
