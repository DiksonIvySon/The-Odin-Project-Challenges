<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library</title>
    <link rel="stylesheet" href="style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
              integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
              crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
    <header>
        <div class="header1">
            <div class="logo">
                <img src="images/2.jpg" alt="myLogo">
            </div>
            <div class="user-logged-in">
                <div>
                    <img src="images/Screenshot_20210512-141131_WhatsApp (2).jpg" alt="logged-in user" >
                </div>
                <div>
                    <h4>Username</h4>
                </div>
            </div>
        </div>
        <div class="header2">
            <div class="search-bar">
                <label for="search-bar">
                    <i class="fa-solid fa-magnifying-glass fa-fade"></i>
                </label>
                <input type="text" id="search-bar" name="search-bar" placeholder="Search">
            </div>
            <div class="navigation">
                <ul>
                    <li><a href="index.html"><strong>Home</strong></a></li>
                    <li><a href="info.html"><strong>more info</strong></a></li>
                    <li><a href="index.html"><strong>Logout</strong></a></li>
                </ul>
            </div>
        </div>
    </header>

    <main>
        <section class="section">
            <div class="add-section">
                <button>
                    Add a book to the library
                </button>
                <form action="">
                    <div>
                        <label for="title">Book Title</label>
                        <input type="text" id="title" name="title" placeholder="title" required>
                    </div>
                    <div>
                        <label for="title">Book Title</label>
                        <input type="text" id="title" name="title" placeholder="title" required>
                    </div>
                    <div>
                        <label for="title">Book Title</label>
                        <input type="text" id="title" name="title" placeholder="title" required>
                    </div>
                    <div>
                        <label for="title">Book Title</label>
                        <input type="text" id="title" name="title" placeholder="title" required>
                    </div>

                    <div class="btn">
                        <button>Add book</button>
                    </div>  
                </form>
            </div>
            <div class="main">
                <div class="book">book1</div>
                <div class="book">book2</div>
                <div class="book">book3</div>
                <div class="book">book4</div>
            </div>

        </section>
    </main>

    <footer class="footer">
    </footer>
</body>
</html>


<!-- ********************************************************************-->

<div class="book">
    <div class="book-details">
        <div class="image">
            <img src="images/2.jpg" alt="book-image">
        </div>
        <div>
            <h2>Title</h2>
            <h4>Author</h4>
            <h4>Pages</h4>
            <h4>read</h4>
        </div>
    </div>
    <div class="book-remove">
        <div>
            <button>Remove Book</button>
        </div>
        <div>
            <select id="readStatus" name="readStatus">
                <option value="not read yet">Not read yet</option>
                <option value="read">Read</option>
            </select>
        </div>
        <div>
            <i class="fa-sharp fa-solid fa-star"></i>
        </div>
    </div>
</div>
<div class="book">
    <div class="book-details">
        <div class="image">
            <img src="images/2.jpg" alt="book-image">
        </div>
        <div>
            <h2>Title</h2>
            <h4>Author</h4>
            <h4>Pages</h4>
            <h4>read</h4>
        </div>
    </div>
    <div class="book-remove">
        <div>
            <button>Remove Book</button>
        </div>
        <div>
            <select id="readStatus" name="readStatus">
                <option value="not read yet">Not read yet</option>
                <option value="read">Read</option>
            </select>
        </div>
        <div>
            <i class="fa-sharp fa-solid fa-star"></i>
        </div>
    </div>
</div>
<div class="book"><div class="book-details">
    <div class="image">
        <img src="images/2.jpg" alt="book-image">
    </div>
    <div>
        <h2>Title</h2>
        <h4>Author</h4>
        <h4>Pages</h4>
        <h4>read</h4>
    </div>
</div>
<div class="book-remove">
    <div>
        <button>Remove Book</button>
    </div>
    <div>
        <select id="readStatus" name="readStatus">
            <option value="not read yet">Not read yet</option>
            <option value="read">Read</option>
        </select>
    </div>
    <div>
        <i class="fa-sharp fa-solid fa-star"></i>
    </div>
</div></div>
<div class="book">
    <div class="book-details">
        <div class="image">
            <img src="images/2.jpg" alt="book-image">
        </div>
        <div>
            <h2>Title</h2>
            <h4>Author</h4>
            <h4>Pages</h4>
            <h4>read</h4>
        </div>
    </div>
    <div class="book-remove">
        <div>
            <button>Remove Book</button>
        </div>
        <div>
            <select id="readStatus" name="readStatus">
                <option value="not read yet">Not read yet</option>
                <option value="read">Read</option>
            </select>
        </div>
        <div>
            <i class="fa-sharp fa-solid fa-star"></i>
        </div>
    </div>
</div>