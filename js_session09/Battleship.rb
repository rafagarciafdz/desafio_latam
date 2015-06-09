#investigar sobre gema para graficos libgosub

class Part
  attr_accessor :x, :y, :ok
  def initialize(x,y)
    @x = x
    @y = y
    @ok = "ok"
  end
  def to_s
    return "\t parte en #{@x}, #{@y} en estado #{ok}\n"
  end
end

class Nave
  attr_accessor :parts
  attr_accessor :size
  def initialize(size, x, y, align_x, align_y)
    @parts = []
    @size = size
    @x = x
    @y = y
    @status = "ok"
    @size.times do |i|
      @parts << Part.new(x + i * align_x, y + i * align_y)
    end
  end

  def hit?(x, y)
    @parts.each do |p|
      return true if p.x == x and p.y == y
    end
    false
  end

  def hit!(x,y)
    @parts.each do |part|
      if part.x == x and part.y == y
        part.ok = "hit"
      end
    end  

    @status = "dead" unless alive?
  end

  def alive?()
    @parts.each do |p|
      return true if p.ok == "ok"
    end
    return false
  end

  def collide?(nave)
    @parts.each do |part|
      nave.parts.each do |other_part|
        return true if part.x == other_part.x and part.y == other_part.y
      end
    end
    return false
  end

  def to_s
    return "nave en estado #{@status} de tamaño #{size} con orig en #{@x}, #{@y} y partes en:\n #{@parts.join(" ")}\n"
  end
end

class Flota
  attr_accessor :naves
  def initialize(num_naves = 4)
    @naves = []
    random = Random.new()
    naves_validas = 0
    while(naves_validas < 4) do 
      size = random.rand(3) + 2
      orig_x = random.rand(8)
      orig_y = random.rand(8)
      align_x = random.rand(2)
      if align_x == 1
        align_y = 0
      else
        align_y = 1
      end
      
      nueva_nave = Nave.new(size, orig_x, orig_y, align_x, align_y)
      nueva_nave_ok = true
      @naves.each do |nave|
        nueva_nave_ok = false if nueva_nave.collide? nave
      end

      if nueva_nave_ok 
        @naves << nueva_nave
        naves_validas += 1
      end

    end
  end

  def to_s
    return @naves.join(" ")
  end

  def check_hit(x,y)
    @naves.each do |nave|
      if nave.hit?(x, y)
        print "golpe\n"
        nave.hit!(x,y)
      end
    end
  end

  def alive?
    @naves.each do |nave|
      return true if nave.alive?
    end
    return false
  end


end

# nave = Nave.new(2, 3, 3, 1, 0)
# puts nave
# puts nave.hit?(2,3)
# puts nave.hit?(3,3)
# puts nave.hit?(3,4)
# puts nave.hit?(4,3)
puts flota = Flota.new(2)
game = true
while (game)
  input = gets.chomp 
  if input == "fin"
    break
  end

  if input == "flota"
    puts flota
    next 
  end

  coords = input.split(",")
  parsed_coords = coords.map{|x| x.to_i }
  flota.check_hit(parsed_coords[0], parsed_coords[1])

  game = false unless flota.alive?
end

print "ganaste"









#codigo nuestro
class Nave
	attr_accessor :x
	attr_accessor :y
	attr_accessor :results
	def initialize(coordenadas)
		@coordenadas = coordenadas
	end

	def colision()
		@coordenadas.each_with_index do |value, index|
			if value[0] == @x && value[1] == @y
				puts "#{index} -> #{value} TRUE"
				@results = true
			end
		end
	end

	def ask()
		puts "Introduce coordenadas x,y"
		coord = gets.chomp.split(",")
		@x = coord[0].to_i
		@y = coord[1].to_i
	end

	def showResult()
		if @results
			puts "Le diste"
		else
			puts "No le diste"
		end
	end

end

coor1 = [[1,1],[2,1],[3,1]]
nave1 = Nave.new(coor1)
nave1.ask
nave1.colision
nave1.showResult