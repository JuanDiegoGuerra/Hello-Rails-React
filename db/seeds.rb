greetings = ['Hello', 'Hi', 'Howdy', 'Greetings', 'Welcome']
greetings.each do |greeting|
  Message.create(greeting: greeting)
end