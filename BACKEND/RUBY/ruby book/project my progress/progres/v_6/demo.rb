total_hours = 0 
sort_hash = hash_technologies.sort_by {|key, value| value}

sort_hash.each do |key,value|
  total_hours += value
  puts format("|  %-12s| %-5.1fh. |", key,value)
end
