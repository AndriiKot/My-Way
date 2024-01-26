require 'benchmark'

               
n = 1_000_000_0

daysprogress = File.readlines('progress.txt')
days_strip = 0;
days_not_strip  = 0;



Benchmark.bm do |x|

x.report('.strip.end_with? '){       
	n.times { 
        daysprogress.each do |line|
            days_strip += 1 if line.strip.end_with?(')')  
        end     
     } 
}

x.report('.end_with? '){       
   n.times { 
    daysprogress.each do |line|
        days_not_strip += 1 if line.end_with?(")\n")  
    end
   }    
}

end

puts "#{days_strip} days of training"
puts "#{days_not_strip} days of training"


