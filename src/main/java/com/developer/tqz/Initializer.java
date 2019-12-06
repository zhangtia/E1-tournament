package com.developer.tqz;

import com.developer.tqz.model.Event;
import com.developer.tqz.model.Group;
import com.developer.tqz.model.GroupRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Collections;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("Vero", "Issei", "Lil Zoo",
                "Victor").forEach(name ->
                repository.save(new Group(name))
        );

        Group djug = repository.findByName("Vero");
        Event e = Event.builder().title("TEST")
                .description("Keeping this for reference")
                .date(Instant.parse("2018-12-12T18:00:00.000Z"))
                .build();
        //djug.setEvents(Collections.singleton(e));
        djug.setScore(9.7);
        repository.save(djug);

        repository.findAll().forEach(System.out::println);
    }
}