require 'benchmark'

               
n = 10_000_000

daysprogress = File.readlines('progress.txt')
days_strip = 0;
days_not_strip  = 0;



Benchmark.bm do |x|

x.report('.strip.end_with?(")") '){       
	n.times { 
        daysprogress.each do |line|
            days_strip += 1 if line.strip.end_with?(')')  
        end     
     } 
}

x.report('.end_with?(")\n")  '){       
   n.times { 
    daysprogress.each do |line|
        days_not_strip += 1 if line.end_with?(")\n")  
    end
   }    
}

end

puts "\nChecking for correct results: "
puts "#{'.strip.end_with?(")"  '}: #{days_strip} days of training"
puts "#{'.end_with?(")\n")  '}: #{days_not_strip} days of training"


