using System;
using System.IO;
using System.Collections.Generic;
using Newtonsoft.Json;
using McMaster.Extensions.CommandLineUtils;

namespace Test
{
    class Program
    {
        public static int Main(string[] args) => CommandLineApplication.Execute<Program>(args);

        [Option("-np", "Number of points", CommandOptionType.SingleValue)]
        public int NumberOfPoints { get; }

        [Option("-jp", "Json points path", CommandOptionType.SingleValue)]
        public string JsonPointsPath { get; }

        public void OnExecute()
        {
            IList<Point> points = null;

            DateTime start = DateTime.Now;
            if (JsonPointsPath == null)
            {
                points = GenerateRandomPoints(NumberOfPoints == 0 ? 2 : NumberOfPoints);
            }
            else
            {
                // deserialize JSON directly from a file
                using (StreamReader file = File.OpenText(JsonPointsPath))
                {
                    JsonSerializer serializer = new JsonSerializer();
                    points = (Point[])serializer.Deserialize(file, typeof(Point[]));
                }
            }
            DateTime end = DateTime.Now;
            Console.WriteLine(end - start);

            start = end;
            Circle result = SmallestEnclosingCircle.MakeCircle(points);
            Console.WriteLine(JsonConvert.SerializeObject(result));
            end = DateTime.Now;
            Console.WriteLine(end - start);
        }

        private int RANDOM_LIMIT = Convert.ToInt32(Math.Pow(10, 9));

        IList<Point> GenerateRandomPoints(int n = 2)
        {
            var ret = new Point[n];
            Random random = new Random();

            for (int i = 0; i < n; i++)
            {
                ret[i] = new Point(random.Next(RANDOM_LIMIT), random.Next(RANDOM_LIMIT));
            }

            return ret;
        }
    }
}
