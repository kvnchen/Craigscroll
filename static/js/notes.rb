

def sum(a)
	x=0
	a.each do |num|
		sum += num
	return sum
end
	
def sum arr
	arr.inject(0,:+)
end

def max_2_sum a
	sum a.sort.slice a.length -2..a.length-1
end

/define a method sum.to.n which takes in an array of integers and an
integer as arguments and returns true if exactly 2 elements sum to n/ 

/ use a hash, and for each key of the hash subtract it from n, and see if
n-a is in the hash, if it is you are done/

def sum_to_n arr,n
	h = Hash.new
	arr.each do |val|
		if hash.key? val
			return true
		else
			hash[n-val]=val
		end
	end
	return false
end



