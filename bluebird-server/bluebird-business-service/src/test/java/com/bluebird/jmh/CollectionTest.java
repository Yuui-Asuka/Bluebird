package com.bluebird.jmh;

import com.alibaba.druid.support.spring.stat.annotation.Stat;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;

import java.util.*;

@State(Scope.Thread)
public class CollectionTest {

    private Random random = new Random();

    public static void main(String[] args) throws RunnerException {
        Options options = new OptionsBuilder().warmupIterations(2).measurementIterations(2).forks(1).build();
        new Runner(options).run();
    }

    @Benchmark
    public void ArrayListTest(){
        List<Integer> l = new ArrayList<>();
        for (int i = 0; i < 1000000; i++){
            l.add(i);
        }
    }

    @Benchmark
    public void LinkedListTest(){
        List<Integer> l = new LinkedList<>();
        for (int i = 0; i < 1000000; i++){
            l.add(i);
        }
    }

    @Benchmark
    public void ArrayListTest1(){
        List<Integer> l1 = new ArrayList<>();
        Iterator iterator = l1.iterator();
        for (int i = 0; i < 1000000; i++){
            l1.add(i);
            int randomI = i + random.nextInt(1000);
        }
        for (int i = 0; i < 990000; i++){
            int randomI = i + random.nextInt(1000);
            l1.get(randomI);
        }

    }

    @Benchmark
    public void LinkedListTest1(){
        List<Integer> l2 = new LinkedList<>();
        for (int i = 0; i < 1000000; i++){
            l2.add(i);
            int randomI = i + random.nextInt(1000);
        }
        for (int i = 0; i < 990000; i++){
            int randomI = i + random.nextInt(1000);
            l2.get(randomI);
        }
    }
}

