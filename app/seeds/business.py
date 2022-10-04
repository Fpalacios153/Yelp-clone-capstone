from email.mime import image
from ..models import db, Business


def seed_businesses():
    business1 = Business(
        ownerId=1,
        name= "Bottega Louie",
        email='bottega.louie@gmail.com',
        phone='1231231234',
        description= "Established in 2007.We opened our first Restaurant & Patisserie in 2009 to specialize in the fine dining, gourmet products, bakery, patisserie and gifting businesses.",
        address= "700 S Grand Av",
        city= "Los Angeles",
        state = 'CA',
        zipcode = "90017",
        country = "United States",
        image = '/static/images/restpic/rest1.jpg'
    )
    business2= Business(
        ownerId=2,
        name= "Hopdoddy Burger Bar",
        email= "HopdoddyBurger@gmail.com",
        phone='1231231235',
        description= 'Great, hand crafted burgers ',
        address="830 S Pacific Coast Highway Blvd",
        city= "El Seegundo",
        state = "CA",
        zipcode ='90094',
        country = "United States",
        image = '/static/images/restpic/rest2.jpg'

    )
    business3= Business(
        ownerId=3,
        name= "Wurstküche",
        email= "Wurstküche@gmail.com",
        phone='1231231236',
        description= "Exotic Grilled Sausages, Belgian Fries, and the best heritage European beers.",
        address= "800 E 3rd St",
        city= "Los Angeles",
        state = "CA",
        zipcode = "90013",
        country = "United States",
        image = '/static/images/restpic/rest3.jpg'
    )
    business4= Business(
        ownerId=1,
        name= "Slurpin' Ramen Bar ",
        email= "SlurpinRamenBar@gmail.com ",
        phone='1231231237',
        description= "Slurpin' Ramen Bar is famous for their rich, thick and creamy tonkotsu broth ramens. We add home made ramen noodles with a huge assortment of different toppings to create an unforgettable dish! ",
        address= "3500 W 8th St",
        city="Los Angeles" ,
        state = "CA",
        zipcode = "90005",
        country = "United States",
        image = '/static/images/restpic/rest4.jpg'

    )
    business5= Business(
        ownerId=2,
        name= "Prince of Venice Restaurant",
        email= "PrinceofVenice@gmail.com",
        phone='1231231238',
        description= "BE ROYALLY REWARDED,with our top-notch pizza al taglio and pasta, available for dine-in, pick-up, or delivery. Freshly made daily by our Italian Chef, using only the finest organic ingredients and pasta — made from scratch at our in-restaurant pasta lab.",
        address="1091 Broxton Ave" ,
        city= "Los Angeles",
        state = "CA" ,
        zipcode ='90024',
        country = "United States",
        image = '/static/images/restpic/rest5.jpg'

    )

    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)

    db.session.commit()


def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
