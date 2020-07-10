# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Card.destroy_all
User.destroy_all


homeworkHomies = Card.create(
    name: "Homework Homies",
    img: "https://vignette.wikia.nocookie.net/jjba/images/c/c6/Vento_aureo_gang_color_v03_pg024_ch457.png/revision/latest?cb=20151025051854",
    att_val: 1700,
    def_val: 3000,
    description: "Your problem has been taken care of."

)

hacker = Card.create(
    name: "Hacker",
    img: "https://destructoid.com/ul/561608-futaba%20sakura%20persona%205%20royal%20trailer.jpg",
    att_val: 500,
    def_val: 2000,
    description: "I wouldn't underestimate me."

)


codeWarrior = Card.create(
    name: "Code Warrior",
    img: "https://vignette.wikia.nocookie.net/villains/images/0/0b/Augus_drawing_out_his_sword.jpg/revision/latest?cb=20121104173705",
    att_val: 800,
    def_val: 2000,
    description: "I haven't found an error I can't fix yet. When I do, that, will be, a glorious day."

)

youngPadawan = Card.create(
    name: "Young padawan",
    img: "https://images.gr-assets.com/hostedimages/1521257928ra/25226534.gif",
    att_val: 300,
    def_val: 1000,
    description: "Whaaat?"

)

akil = User.create(name: "Akil", password: "three")
joe = User.create(name: "Joe", password: "seven")
rey = User.create(name: "Rey", password: "segtesee")
ivan = User.create(name: "Ivan", password: "czar")
bearonica = User.create(name: "Bearonica", password: "honey trap")

