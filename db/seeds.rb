# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all
Comment.destroy_all
Skill.destroy_all
Appointment.destroy_all



u1 = User.create(username: "ty07", password_digest: "ueht4jw52nrb")
u2 = User.create(username: "shady21", password_digest: "lipcnr43on53n")
u3 = User.create(username: "frank87", password_digest: "nka3bklr8brb9")
u4 = User.create(username: "wendy12", password_digest: "hushh8q43brh5")
u5 = User.create(username: "tray75", password_digest: "4tuy5sk9ndnne")




p1 = Post.create(user_id: u1.id, content: "I am trying to get a math formula working but apparently not getting it right. Would like some help!!", resolved?: false, likes: 0)
p2 = Post.create(user_id: u2.id, content: "I'm available all day in case anyone has some questions they want to ask", resolved?: false, likes: 0)
p3 = Post.create(user_id: u3.id, content: "how do we begin to differentiate between when to apply brackets, parenthesis and curly braces?", resolved?: false, likes: 0)

    

s1 = Skill.create(title: "Programming with Python", about: "Python is a general-purpose, versatile and popular programming language. It’s great as a first language because it is concise and easy to read, and it is also a good language to have in any programmer’s stack as it can be used for everything from web development to software development and scientific applications.", resources: "https://www.learnpython.org/, https://www.codecademy.com/learn/learn-python")
s2 = Skill.create(title: "Basics of Redux", about: "The fundamental concepts in Redux are called "stores" and "actions". A store has two parts: a plain-old JavaScript object that represents the current state of your application, and a "reducer", which is a function that describes how incoming actions modify your state.", resources: "https://thinkster.io/tutorials/learn-redux, https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/")
s3 = Skill.create(title: "MySQL Fundamentals", about: "The architecture of the world’s most popular open source database system is very important for the Information Technology people. There are many reasons for MySQL’s popularity around the world, but one of the main reasons is its architecture, while there are many big players such as Oracle, Microsoft SQL and DB2, MySQL’s architecture makes it as unique and preferred choice for most of the developers.", resources: "https://www.pluralsight.com/courses/mysql-fundamentals-part1, https://www.udemy.com/course/fundamentals-of-mysql/")
s4 = Skill.create(title: "Mobile Application Programming With React-Native", about: "React Native is a cross-platform mobile app development framework like PhoneGap and it is used to build an extensive app for Android and iOS smartphones. In this article, we will discuss what is React Native and why should you choose it for your business mobile app development.", resources: "https://www.tutorialspoint.com/react_native/index.htm, https://www.geeksforgeeks.org/introduction-react-native/")
s5 = Skill.create(title: "JavaScript Frameworks", about: "Whether you’re learning to code enroute to a full-time career as a web developer or stockpiling tech skills to start a lucrative side hustle, JavaScript—a scripting language used to create and control dynamic web components (things like photo slideshows, animated graphics, and interactive forms)—needs to be high on your list of front-end development skills to learn.", resources: "https://www.lambdatest.com/blog/best-javascript-framework-2020/, https://www.freecodecamp.org/news/complete-guide-for-front-end-developers-javascript-frameworks-2019/")



c1 = Comment.create(post_id: p1.id, user_id: u1.id, content: "for anyone that wants to help, I'll have the question available here", likes: 0)
c2 = Comment.create(post_id: p2.id, user_id: u2.id, content: "can I have a link up for where to find resources for a coding project?", likes: 0)
c3 = Comment.create(post_id: p3.id, user_id: u3.id, content: "maybe use brackets by default since it works for other cases pretty well",likes: 0)



a1 = Appointment.create(user_id: u1.id, skill_id: s1.id, skill_title: "Programming with Python", max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a2 = Appointment.create(user_id: u2.id, skill_id: s2.id, skill_title: "Basics of Redux", max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a3 = Appointment.create(user_id: u3.id, skill_id: s3.id, skill_title: "MySQL Fundamentals", max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a4 = Appointment.create(user_id: u4.id, skill_id: s4.id, skill_title: "Mobile Application Programming With React-Native", max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a5 = Appointment.create(user_id: u5.id, skill_id: s5.id, skill_title: "JavaScript Frameworks", max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))





