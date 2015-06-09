require 'open-uri'

pages = ['http://rafagarciafdz.github.io/']

pages.each do |page|
  web_contents  = open(page) {|f| f.read }
  lines = web_contents.split("\n")
  lines.each_with_index do |p, i|
    r = /style="(.*)"/.match p
    puts "linea #{i} #{r.captures[0]}" if r
  end
end


require 'open-uri'

pages = ['http://rafagarciafdz.github.io/']

pages.each do |page|
  web_contents  = open(page) {|f| f.read }
  lines = web_contents.split("\n")
  lines.each_with_index do |p, i|
    r = /<title>(.*)</.match p
    s = /<h1>(.*)</.match p
    puts "linea #{i} #{r.captures[0]}" if r    
    puts "linea #{i} #{s.captures[0]}" if s
  end
end




https?:\/\/[\S]+\w