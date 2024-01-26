require 'benchmark'

puts 'TestBm_2'
puts  'title:'"#{' ' * 10}"'date formatting'
print "\n"

n = 10_000_000

Benchmark.bm do |x|
  t = Time.now;

  x.report('"Today: #{t.strftime("%Y-%m-%d")}" '){       
  	n.times { "Today: #{t.strftime("%Y-%m-%d")}" } 
  }

  x.report('"Today: #{t.year}-#{t.month}-#{t.day}"'){       
     n.times { "Today: #{t.year}-#{t.month}-#{t.day}"}    
  }

  puts "\nChecking for correct results:"
  puts "Today: #{t.strftime("%Y-%m-%d")}"
  puts "Today: #{t.year}-#{t.month}-#{t.day}"
end

print "\n" * 4


