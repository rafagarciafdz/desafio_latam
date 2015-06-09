class Barco
	#equivale al get
	attr_reader :x
	#equivale al set
	attr_writer :x
	
	#equivale al get
	attr_reader :y
	#equivale al set
	attr_writer :y
	
	#equivale a ambos
	attr_accessor :x
	#equivale a ambos
	attr_accessor :y

	def initialize()
		@x = 5
	end
end