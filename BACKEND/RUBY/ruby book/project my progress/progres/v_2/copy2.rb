daysprogress = File.readlines('delete_commas.txt')
days_training = 0;

hash_technologies = Hash.new(0)

# p daysprogress

daysprogress.each do |line|
date_format = false
hours = false
str_key = ''
str_value = ''
# p line
    line.each_char do |chr|
      # p date_format, chr
      gets
      if (date_format || chr == ' ' ) then p("step 1");next end
      if (chr == ":") then p("step 2"); date_format = true; next end
      if (chr == "\n") then p("step 3");date_format = false; next end
      if ('a'..'z').cover?(chr)
        p("step 4");
        #  (p "\"a..z\" 
        str_key += chr; next 
      end
      if (chr == "[")
        p("step 5")
        # p "GG"
        # p str_key.inspect
        hash_technologies[str_key] += 0
        hours = true
        next
      end
      if(hours && (chr == ('.') || (('0'..'9').cover?(chr))))
        p("step 6");
        str_value += chr
        # p str_value
        next
      end
      if(chr == ']')
        p("step 7")
        hash_technologies[str_key] += str_value.to_f
        p "To_f: #{str_value.to_f}"
        p hash_technologies
        hours = false
        str_value = ''
        str_key = ''
        next
      end
      # gets
      # p "chr: #{chr.inspect} #{(chr == '[')}"
      # gets

      p hash_technologies
      
      # if (chr == "\n") then date_format = false; next end
      # if (hours and chr != "]") then str_value += chr; next end
      # if (chr == "]")
      #    hash_technologies[str_key] += str_value.to_f
      #    str_value = ''
      #    hours = false
      #    next
      # end
    end; 
    # p "str_key: #{str_key}"
    # p hash_technologies;gets
end



p hash_technologies
puts "Total: #{hash_technologies.size}"







