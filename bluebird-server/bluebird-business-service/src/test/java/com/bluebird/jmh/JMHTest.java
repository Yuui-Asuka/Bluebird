package com.bluebird.jmh;


import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;

public class JMHTest {

    public static void main(String[] args) throws RunnerException {
        Options options = new OptionsBuilder().warmupIterations(2).measurementIterations(2).forks(1).build();
        new Runner(options).run();
    }

    @Benchmark
    public void testStringBuilder(){
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 1000000 ;i++){
            sb.append("1");
        }
    }

    @Benchmark
    public void testStringBuffer(){
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < 1000000 ;i++){
            sb.append("1");
        }
    }

    @Benchmark
    public void testString(){
        String a = "1";
        for (int i = 0; i < 1000000 ;i++){
            a += "1";
        }
    }

}
