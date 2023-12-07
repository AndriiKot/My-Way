daysprogress = File.readlines('progress.txt')
days_training = 0;

hash_technologies = Hash.new(0)

daysprogress.each do |line|
   str_technologie = ''
   str_value = ''
   value_start? = false

    line.each_char do |chr|
  
      case chr
        when 'a'..'z'
           then  p str_technologie += chr
        when '['
           next
        else 
           if chr == '' 
            hash_technologies[str_technologie] += str_value.to_i 
            str_technologie = ''
            str_value = ''
          end
      end
    end
    gets
end

# hash_technologies.each do |key,value|
#     p key
# end

# puts

# hash_technologies.keys.sort!.each_with_index do |technologi,i|
#     p technologi
# end

p hash_technologies.size







