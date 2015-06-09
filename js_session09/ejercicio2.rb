class Complejo
	def initialize(a, b)
		@a = a
		@b = b
	end

	def get_a()
		return @a
	end

	def set_a(a)
		@a = a
	end

	def get_b()
		return @b
	end

	def set_b(b)
		@b = b
	end

	def to_s
		return "#{@a} + #{@b}i"
	end
end

puts Complejo.new(1,1)