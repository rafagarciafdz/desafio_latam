class Complejo
	attr_accessor :a
	attr_accessor :b

	def initialize(a, b)
		@a = a
		@b = b
	end

	def to_s
		return "#{@a} + #{@b}i"
	end

	def +(complejo)
		return Complejo.new(@a + complejo.a, @b + complejo.b)
	end
end

puts Complejo.new(1,1)