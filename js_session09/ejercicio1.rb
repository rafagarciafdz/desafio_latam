name = "Rafael"

def name.add_title
	return "super #{self}"
end

#test = name.add_title()
#puts test

puts name.add_title

class String
	def add_prefix(prefix)
		return "#{prefix} #{self}"
	end
end

puts name.add_prefix("Mr")