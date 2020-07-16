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

    

s1 = Skill.create(title: "Programming with Python")
s2 = Skill.create(title: "Basics of Redux")
s3 = Skill.create(title: "MySQL Fundamentals")
s4 = Skill.create(title: "Mobile Application Programming With React-Native")
s5 = Skill.create(title: "JavaScript Frameworks")



c1 = Comment.create(post_id: p1.id, user_id: u1.id, content: "for anyone that wants to help, I'll have the question available here", likes: 0)
c2 = Comment.create(post_id: p2.id, user_id: u2.id, content: "can I have a link up for where to find resources for a coding project?", likes: 0)
c3 = Comment.create(post_id: p3.id, user_id: u3.id, content: "maybe use brackets by default since it works for other cases pretty well",likes: 0)



a1 = Appointment.create(user_id: u1.id, skill_id: s1.id, max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a2 = Appointment.create(user_id: u2.id, skill_id: s2.id, max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a3 = Appointment.create(user_id: u3.id, skill_id: s3.id, max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a4 = Appointment.create(user_id: u4.id, skill_id: s4.id, max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))
a5 = Appointment.create(user_id: u5.id, skill_id: s5.id, max_partners: 1, start_date: DateTime.parse("08/01/2020"), completion_date: DateTime.parse("08/12/2020"))





