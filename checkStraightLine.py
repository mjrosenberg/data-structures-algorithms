class Solution(object):
    def checkStraightLine(self, coordinates):
        """
        :type coordinates: List[List[int]]
        :rtype: bool
        """
        if len(coordinates) <=2:
            return True
        firstCoord = coordinates[0]
        secondCoord = coordinates[1]
        if (secondCoord[0] - firstCoord[0] == 0):
            slope = None
        else:
            slope = (secondCoord[1] - firstCoord[1])/(secondCoord[0] - firstCoord[0])
        for i in range(2, len(coordinates)):
            c1 = coordinates[i-1]
            c2 = coordinates[i]
            if (c2[0]-c1[0] == 0):
                currSlope = None
            else:
                currSlope = (c2[1] - c1[1])/(c2[0] - c1[0])
            if (currSlope != slope):
                return False
        return True
