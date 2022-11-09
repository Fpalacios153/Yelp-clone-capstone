from ..models import db, Business


def seed_businesses():
    # apples = Business.query.get(1)
    # print(apples)
    business1 = Business(
        ownerId=1,
        name= "Bottega Louie",
        email='bottega.louie@gmail.com',
        phone='123-123-1234',
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
        phone='123-123-1235',
        description= 'Great, hand crafted burgers ',
        address="830 S Pacific Coast Highway Blvd",
        city= "El Segundo",
        state = "CA",
        zipcode ='90094',
        country = "United States",
        image = '/static/images/restpic/rest2.jpg'

    )
    business3= Business(
        ownerId=3,
        name= "Wurstküche",
        email= "Wurstküche@gmail.com",
        phone='123-123-1236',
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
        phone='123-123-1237',
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
        phone='123-123-1238',
        description= "BE ROYALLY REWARDED,with our top-notch pizza al taglio and pasta, available for dine-in, pick-up, or delivery. Freshly made daily by our Italian Chef, using only the finest organic ingredients and pasta — made from scratch at our in-restaurant pasta lab.",
        address="1091 Broxton Ave" ,
        city= "Los Angeles",
        state = "CA" ,
        zipcode ='90024',
        country = "United States",
        image = '/static/images/restpic/rest5.jpg'
    )
    business6= Business(
        ownerId=4,
        name= "Mamá Por Dios",
        email= "MamáPorDios@gmail.com",
        phone='123-123-1238',
        description= "Mamá por Dios is a restaurant that highlights the best of México, with its flavors, aromas, colors, traditions and art. Bringing it closer to its customers and every drink in every corner. Mamá por Dios is a Mexican gourmet restaurant where you can celebrate every moment to the sound of live Mariachi or enjoy a shot to the beats of a great DJ.",
        address="8722 W 3rd St" ,
        city= "Los Angeles",
        state = "CA" ,
        zipcode ='90048',
        country = "United States",
        image = '/static/images/restpic/rest6.jpg'
    )

    db.session.add(business1)
    db.session.add(business2)
    db.session.add(business3)
    db.session.add(business4)
    db.session.add(business5)
    db.session.add(business6)

    db.session.commit()


def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
