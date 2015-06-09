f = File.open("ejercicio2.rb", "r")
data = f.read

new_data = data.split
new_data.each do |p|
	r=/href="(.*)"/.match p
	puts r.captures[0] if r
end